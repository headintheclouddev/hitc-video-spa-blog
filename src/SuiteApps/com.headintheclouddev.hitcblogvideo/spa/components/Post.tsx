import {ThemeContext} from "../contexts";
import { useContext } from '@uif-js/core';
import {Link} from "@uif-js/component";

export default function Post(props: IPost) {
  const { secondaryColor } = useContext(ThemeContext);
  let processedContent = props.content;
  if (props.content.length > 30) processedContent = props.content.substring(0, 30) + '...';
  return (
    <div>
      <h3 style={{ color: secondaryColor }}>{props.title}</h3>
      <div>{processedContent}</div>
      <div><br/><Link route={{ route: '/view/:id', parameters: { id: props.id } }}>View full post</Link></div>
      <br />
      <i>Written by <b>{props.author}</b></i>
    </div>
  )
}

export interface IPost {
  id: number;
  title: string;
  content: string;
  author: string;
}
