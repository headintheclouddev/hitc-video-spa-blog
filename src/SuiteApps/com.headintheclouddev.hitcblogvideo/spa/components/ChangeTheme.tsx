// import { useState } from '@uif-js/core';

const THEMES: ITheme[] = [
  { primaryColor: 'deepskyblue', secondaryColor: 'coral' },
  { primaryColor: 'orchid', secondaryColor: 'mediumseagreen' }
];

function ThemeItem(props: { theme: ITheme, active: boolean, onClick: () => void }) {
  return (
    <span onClick={props.onClick} style={{ cursor: 'pointer', paddingLeft: '8px', fontWeight: props.active ? 'bold' : 'normal' }}>
      <span style={{ color: props.theme.primaryColor }}>Primary</span> / <span style={{ color: props.theme.secondaryColor }}>Secondary</span>
    </span>
  )
}

export default function ChangeTheme(props: { theme: ITheme, setTheme: (theme: ITheme) => void }) {
  // const [themes, setThemes] = useState([]);
  function isActive(t: ITheme) {
    return t.primaryColor == props.theme.primaryColor && t.secondaryColor == props.theme.secondaryColor;
  }
  return (
    <div>
      Change Theme:
      {THEMES.map((t, i) =>
        <ThemeItem theme={t} active={isActive(t)} onClick={ () => props.setTheme(t) } />
      )}
    </div>
  )
}

interface ITheme {
  primaryColor: string;
  secondaryColor: string;
}
