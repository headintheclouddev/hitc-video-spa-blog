import {ThemeContext} from "../contexts";
import {JSX, useContext} from '@uif-js/core';
import {Link} from "@uif-js/component";

export default function Post(props: IPost) {
  const { secondaryColor } = useContext(ThemeContext);
  let processedContent = props.content;
  if (props.short && props.content.length > 30) processedContent = props.content.substring(0, 30) + '...';
  let linkToFullContent: JSX.Element = null;
  if (props.short) linkToFullContent = <div><br/><Link route={{ route: '/view/:id', parameters: { id: props.id } }}>View full post</Link></div>
  return (
    <div>
      <h3 style={{ color: secondaryColor }}>{props.title}</h3>
      <div>{processedContent}</div>
      {linkToFullContent}
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
  short?: boolean;
}
