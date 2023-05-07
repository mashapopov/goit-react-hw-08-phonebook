import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Oval
      height={70}
      width={70}
      color="#FF00FF"
      wrapperStyle={{}}
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#FF00FF"
      strokeWidth={3}
      strokeWidthSecondary={3}
      wrapperClass="LoaderWrapper"
    />
  );
};

// import { BallTriangle } from 'react-loader-spinner';
// // import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// export const Loader = () => {
//   return (
//     <h1
//       style={{
//         margin: '0 auto',
//         fontSize: 50,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       }}
//     >
//       <BallTriangle
//         height={50}
//         width={50}
//         radius={5}
//         color="#4fa94d"
//         ariaLabel="ball-triangle-loading"
//         wrapperClass={{}}
//         wrapperStyle=""
//         visible={true}
//       />
//       Загружаем...
//     </h1>
//   );
// };
