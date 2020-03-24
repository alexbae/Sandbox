export interface IImage {
  url: string;
  title: string;
  caption?: string;
}

const images: IImage[] = [
  {
    url: 'https://via.placeholder.com/550x500',
    title: 'Image 1',
    caption: 'This is image 1'
  },
  {
    url: 'https://via.placeholder.com/400x500',
    title: 'Image 2',
    caption: 'This is image 2'
  },
  {
    url: 'https://via.placeholder.com/550x550',
    title: 'Image 3',
    caption: 'This is image 3'
  }
];

export default images;
