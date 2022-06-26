import PropsTypes from 'prop-types';

const MyComponent = ({ name, children, age }) => {
  return (
    <div>
      안녕하세요, 제이름은 {name}입니다.
      <br />
      chidren의 값은 {children}입니다.
      <br />
      저의 나이는 {age}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'yunrap',
};

MyComponent.PropsTypes = {
  name: PropsTypes.string, //문자열만 허용한다
  age: PropsTypes.number.isRequired,
};

export default MyComponent;
