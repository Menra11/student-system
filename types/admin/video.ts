export interface Video{
  video_id: number,
  video_title: string,
  video_description: string,
  video_url: string,
  video_duration: number,
  course_name: string,
}
export interface VideosResponse{
  Videos: Video[];
}
export interface VideoResponse{
  Video: Video;
}