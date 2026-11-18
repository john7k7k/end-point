"""Resolve a server-side intrinsics snapshot without modifying the wire packet."""
import re


def camera_profile_id(header):
    # Legacy edge transmitters omit cameraId and use a single default camera.
    camera_id = header.get('cameraId', 'default')
    if not isinstance(camera_id, str) or not re.fullmatch(r'[a-zA-Z0-9_-]{1,64}', camera_id):
        raise ValueError('invalid cameraId')
    return camera_id


def effective_intrinsics(header, profile):
    camera_id = camera_profile_id(header)
    if not profile['enabled']:
        return dict(source='packet', cameraId=camera_id, values=header['intrinsics'])
    if (profile['width'], profile['height']) != (header['width'], header['height']):
        return None
    return dict(source='server_override', cameraId=camera_id, revision=profile['revision'],
                values={key: profile[key] for key in ('fx', 'fy', 'cx', 'cy')})
