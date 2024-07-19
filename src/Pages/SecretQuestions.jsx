import Button from "../Component/Button";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { useState } from "react";
const questions = [
  {
    id: 1,
    text: "",
    subquestions: [
      {
        id: 1,
        text: "Question 1",
      },
      {
        id: 2,
        text: "Question 2",
      },
      {
        id: 3,
        text: "Question 3",
      },
      {
        id: 4,
        text: "Question 4",
      },
    ],
  },
  {
    id: 2,
    text: "",
    subquestions: [
      {
        id: 5,
        text: "Question 2",
      },
      {
        id: 6,
        text: "Question 2",
      },
      {
        id: 7,
        text: "Question 3",
      },
      {
        id: 8,
        text: "Question 4",
      },
    ],
  },
  {
    id: 3,
    text: "",
    subquestions: [
      {
        id: 9,
        text: "Question 3",
      },
      {
        id: 10,
        text: "Question 2",
      },
      {
        id: 11,
        text: "Question 3",
      },
      {
        id: 12,
        text: "Question 4",
      },
    ],
  },
  
];

const SecretQuestions = ({ onClickHandler }) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("");

  const ClickShow = () => {
    setShow((show) => !show);
  };

  const handleSelect = (question) => {
    setSelected(question);
    setShow(false);
  };

  return (
    <div className="md:px-16 px-6">
      <h1 className="text-txtblue text-center font-lato text-xl font-bold py-4">
        Set Up Security Questions
      </h1>
      <p>
        Please select three security questions and provide answers. These
        questions will be used to verify your identity if you need to recover
        your account
      </p>
      <div>
        {questions &&
          questions.map((question) => (
            <div key={question.id}>
              <div>
                <div className="bg-white rounded my-2 py-2 flex justify-between items-center px-2 border-[1px]">
                  <input
                    className="rounded-2xl"
                    type="text"
                    value={selected}
                    readOnly
                    placeholder="Select Your Question"
                  />

                 <div onClick={ClickShow}>
                  {
                    show ? <SlArrowUp/> : <SlArrowDown/>
                  }

                 </div>
                </div>
                <div className="bg-white">
                  {question.subquestions.map((subquestion) => (
                    <p
                      key={subquestion.id}
                      className="border-b-[1px] py-2 px-1 cursor-pointer"
                    >
                      {subquestion.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
           <div className='py-4 ' onClick={onClickHandler}>
        <Button>SAVE</Button>
        </div>
      </div>
    </div>
  );
};

export default SecretQuestions;

// import Button from "../Component/Button";
// import { SlArrowDown } from "react-icons/sl";
// import { SlArrowUp } from "react-icons/sl";
// import { useState } from "react";

// const questions = [
//   {
//     id: 1,
//     text: "Question Group 1",
//     subquestions: [{ id: 1, text: "Question 1" }],
//   },
//   {
//     id: 2,
//     text: "Question Group 2",
//     subquestions: [{ id: 2, text: "Question 2" }],
//   },
//   {
//     id: 3,
//     text: "Question Group 3",
//     subquestions: [{ id: 3, text: "Question 3" }],
//   },
//   {
//     id: 4,
//     text: "Question Group 4",
//     subquestions: [{ id: 4, text: "Question 4" }],
//   },
// ];

// const SecretQuestions = ({ onClickHandler }) => {
//   const [show, setShow] = useState(false);
//   const [selected, setSelected] = useState("");
//   const [openQuestionId, setOpenQuestionId] = useState(null);

//   const ClickShow = () => {
//     setShow((show) => !show);
//   };

//   const handleSelect = (question) => {
//     setSelected(question.text);
//     setShow(false);
//     setOpenQuestionId(null); // Close the subquestions when one is selected
//   };

//   const toggleSubquestions = (id) => {
//     if (openQuestionId === id) {
//       setOpenQuestionId(null);
//     } else {
//       setOpenQuestionId(id);
//     }
//   };

//   return (
//     <div className="md:px-16">
//       <h1 className="text-txtblue text-center font-lato text-xl font-bold py-4">
//         Set Up Security Questions
//       </h1>
//       <p>
//         Please select three security questions and provide answers. These
//         questions will be used to verify your identity if you need to recover
//         your account.
//       </p>
//       <div>
//         {questions.map((question) => (
//           <div key={question.id}>
//             <div
//               className="bg-white rounded my-2 py-2 flex justify-between items-center px-2 border-[1px]"
//               onClick={() => toggleSubquestions(question.id)}
//             >
//               <input
//                 className="rounded-2xl"
//                 type="text"
//                 value={selected}
//                 readOnly
//                 placeholder="Select Your Question"
//               />
//               <div>
//                 {openQuestionId === question.id ? (
//                   <SlArrowUp />
//                 ) : (
//                   <SlArrowDown />
//                 )}
//               </div>
//             </div>
//             {openQuestionId === question.id && (
//               <div className="bg-white py-2 px-2 border-[1px] mt-2">
//                 {question.subquestions.map((subquestion) => (
//                   <p
//                     key={subquestion.id}
//                     className="border-b-[1px] py-1 cursor-pointer"
//                     onClick={() => handleSelect(subquestion)}
//                   >
//                     {subquestion.text}
//                   </p>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SecretQuestions;
