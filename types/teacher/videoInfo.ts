export interface VideoInfo {
  student_id: number;
  student_name: string;
  course_id: number;
  course_name: string;
  video_title: string;
  video_duration: number;
  progress: number;
  completed: boolean;
  score: number;
}
export interface VideoInfoResponse {
  VideoInfo: VideoInfo[];
}