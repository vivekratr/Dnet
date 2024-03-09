// import React, { Component } from 'react';
// import ChatBot from 'react-simple-chatbot';
// import { ThemeProvider } from 'styled-components';
// import axios from 'axios';

// class Bruno extends Component {
//   handleGptApi = async (userInput) => {
//     const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//       messages: [
//         {
//           role: 'system',
//           content: 'You are a helpful assistant.'
//         },
//         {
//           role: 'user',
//           content: userInput
//         }
//       ]
//     }, {
//       headers: {
//         'Authorization': `Bearer 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`,
//         'Content-Type': 'application/json'
//       }
//     });
  
//     return response.data.choices[0].text;
//   }

//   render() {
//     const theme = {
//       background: '#f5f8fb',
//       fontFamily: 'Helvetica Neue',
//       headerBgColor: '#EF6C00',
//       headerFontColor: '#fff',
//       headerFontSize: '15px',
//       botBubbleColor: '#EF6C00',
//       botFontColor: '#fff',
//       userBubbleColor: '#fff',
//       userFontColor: '#4a4a4a',
//     };

//     const steps = [
//       {
//         id: '1',
//         message: 'What is your question?',
//         trigger: 'question',
//       },
//       {
//         id: 'question',
//         user: true,
//         trigger:()=>{this.handleGptApi()},
//       },
//       {
//         id: 'response',
//         message: '{previousValue}',
//         end: true,
//       },
//     ];

//     return (
//       <ThemeProvider theme={theme}>
//         <ChatBot steps={steps} />
//       </ThemeProvider>
//     );
//   }
// }

// export default Bruno;