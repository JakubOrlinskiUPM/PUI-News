export interface Article {
  id?: number,
  category: string,
  title: string,
  subtitle: string,
  abstract: string,
  body?: string,
  image_data?: string,
  image_media_type: string,
  thumbnail_data?: string,
  thumbnail_media_type?: string,
  file_input?: any
}
