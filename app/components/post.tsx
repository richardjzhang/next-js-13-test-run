import dayjs from 'dayjs';

export const postClass =
  'mb-2 w-full h-80 object-cover rounded-2xl shadow shadow-slate-400';

export interface Post {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: string[];
  publishDate: string;
  owner: {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
  };
}

function Post(props: Post) {
  const { image, publishDate, text } = props;
  return (
    <div>
      <img className={postClass} src={image} />
      <div className="text-sm text-zinc-600 font-semibold">
        {dayjs(publishDate).format('MMMM DD YYYY')}
      </div>
      <div className="truncate capitalize text-lg font-semibold text-gray-900">
        {text}
      </div>
    </div>
  );
}

export default Post;
