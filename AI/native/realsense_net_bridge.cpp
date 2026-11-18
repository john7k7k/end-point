// Official librealsense network receiver. stdout is a binary pipe consumed by Python.
#include <librealsense2-net/rs_net.hpp>
#include <cmath>
#include <cstdint>
#include <cstring>
#include <iomanip>
#include <iostream>
#include <sstream>
#include <stdexcept>
#include <string>
#ifdef _WIN32
#include <fcntl.h>
#include <io.h>
#endif

static void write_rows(const rs2::video_frame& frame, int bytes_per_pixel) {
    const auto* data = static_cast<const char*>(frame.get_data());
    const int row_bytes = frame.get_width() * bytes_per_pixel;
    for (int row = 0; row < frame.get_height(); ++row)
        std::cout.write(data + row * frame.get_stride_in_bytes(), row_bytes);
}

int main(int argc, char** argv) {
    try {
        if (argc != 5)
            throw std::runtime_error("Expected IPv4 width height fps");
#ifdef _WIN32
        _setmode(_fileno(stdout), _O_BINARY);
#endif
        const int width = std::stoi(argv[2]);
        const int height = std::stoi(argv[3]);
        const int fps = std::stoi(argv[4]);
        rs2::context context;
        rs2::net_device device(argv[1]);
        device.add_to(context);
        for (auto sensor : device.query_sensors()) {
            if (sensor.supports(RS2_OPTION_GLOBAL_TIME_ENABLED))
                sensor.set_option(RS2_OPTION_GLOBAL_TIME_ENABLED, 1);
        }
        rs2::pipeline pipeline(context);
        rs2::config config;
        config.enable_device(device.get_info(RS2_CAMERA_INFO_SERIAL_NUMBER));
        config.enable_stream(RS2_STREAM_COLOR, width, height, RS2_FORMAT_YUYV, fps);
        config.enable_stream(RS2_STREAM_DEPTH, width, height, RS2_FORMAT_Z16, fps);
        const auto profile = pipeline.start(config);
        const float scale = profile.get_device().first<rs2::depth_sensor>().get_depth_scale();
        rs2::align align_to_color(RS2_STREAM_COLOR);
        for (int warmup = 0; warmup < 15; ++warmup)
            pipeline.wait_for_frames(10000);
        while (std::cout.good()) {
            const auto raw = pipeline.wait_for_frames(10000);
            const auto raw_color = raw.get_color_frame();
            const auto raw_depth = raw.get_depth_frame();
            if (!raw_color || !raw_depth)
                continue;
            const auto aligned = align_to_color.process(raw).as<rs2::frameset>();
            const auto color = aligned.get_color_frame();
            const auto depth = aligned.get_depth_frame();
            if (!color || !depth)
                continue;
            const auto intrinsics = color.get_profile().as<rs2::video_stream_profile>().get_intrinsics();
            const auto color_time = static_cast<int64_t>(std::llround(raw_color.get_timestamp() * 1000000.0));
            const auto depth_time = static_cast<int64_t>(std::llround(raw_depth.get_timestamp() * 1000000.0));
            std::ostringstream header;
            header << std::setprecision(17)
                   << "{\"width\":" << color.get_width() << ",\"height\":" << color.get_height()
                   << ",\"colorFormat\":\"yuyv\",\"depthAlignedToColor\":true,\"depthScaleMeters\":" << scale
                   << ",\"colorCaptureTimeNs\":\"" << color_time
                   << "\",\"depthCaptureTimeNs\":\"" << depth_time
                   << "\",\"colorClock\":\"" << rs2_timestamp_domain_to_string(raw_color.get_frame_timestamp_domain())
                   << "\",\"depthClock\":\"" << rs2_timestamp_domain_to_string(raw_depth.get_frame_timestamp_domain())
                   << "\",\"intrinsics\":{\"fx\":" << intrinsics.fx << ",\"fy\":" << intrinsics.fy
                   << ",\"cx\":" << intrinsics.ppx << ",\"cy\":" << intrinsics.ppy << "}}";
            const std::string json = header.str();
            const uint32_t size = static_cast<uint32_t>(json.size());
            const char prefix[] = {static_cast<char>(size >> 24), static_cast<char>(size >> 16),
                                   static_cast<char>(size >> 8), static_cast<char>(size)};
            std::cout.write(prefix, 4);
            std::cout.write(json.data(), json.size());
            write_rows(color, 2);
            write_rows(depth, 2);
            std::cout.flush();
        }
        pipeline.stop();
        return 0;
    } catch (const std::exception& error) {
        std::cerr << error.what() << std::endl;
        return 1;
    }
}
