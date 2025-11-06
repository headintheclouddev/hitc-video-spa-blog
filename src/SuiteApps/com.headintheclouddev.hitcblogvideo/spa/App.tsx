import {ContentPanel, Heading} from '@uif-js/component';
import {JSX} from '@uif-js/core';

export default function App(): JSX.Element {
  return (
    <ContentPanel
      horizontalAlignment={ContentPanel.HorizontalAlignment.CENTER}
      verticalAlignment={ContentPanel.VerticalAlignment.CENTER}
    >
      <Heading>Hello World!</Heading>
    </ContentPanel>
  );
}
