export type ButtonType = {
  type: 'button' | 'reset' | 'submit';
  onBtnClick: () => void;
  title: string;
};
