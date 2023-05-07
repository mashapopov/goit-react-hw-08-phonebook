import { H2 } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <H2>{title}</H2>
      {children}
    </>
  );
};
