cmake_minimum_required(VERSION 3.16)
project(realsense_net_bridge LANGUAGES CXX)

find_package(realsense2 REQUIRED)
find_package(realsense2-net REQUIRED)

add_executable(realsense-net-bridge realsense_net_bridge.cpp)
target_compile_features(realsense-net-bridge PRIVATE cxx_std_11)
target_include_directories(realsense-net-bridge PRIVATE ${realsense2_INCLUDE_DIR} ${realsense2-net_INCLUDE_DIR})
target_link_libraries(realsense-net-bridge PRIVATE ${realsense2_LIBRARY} ${realsense2-net_LIBRARY})
