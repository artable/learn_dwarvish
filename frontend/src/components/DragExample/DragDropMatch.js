// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import React, { useState } from 'react';
// import './DragDrop.css';

// const DragDropMatch = (result) => {
//   const finalSpaceCharacters = [
//     {
//       id: 'test6',
//       name: 'test6',
//     },
//     {
//       id: 'test7',
//       name: 'test7',
//     },
//     {
//       id: 'test8',
//       name: 'test8',
//     },
//     {
//       id: 'test9',
//       name: 'test9',
//     },
//     {
//       id: 'test10',
//       name: 'test10',
//     },
//   ];

//   const [characters, updateCharacters] = useState(finalSpaceCharacters);

//   function handleOnDragEnd(result) {
//     if (!result.destination) return;

//     const items = Array.from(characters);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);

//     updateCharacters(items);
//   }

//   return (
//     <div className='content'>
//       <header className='App-header'>
//         <h1>Drop</h1>
//         <DragDropContext onDragEnd={handleOnDragEnd}>
//           <Droppable droppableId='characters'>
//             {(provided) => (
//               <ul
//                 className='characters'
//                 {...provided.droppableProps}
//                 ref={provided.innerRef}>
//                 {characters.map(({ id, name, thumb }, index) => {
//                   return (
//                     <Draggable key={id} draggableId={id} index={index}>
//                       {(provided) => (
//                         <li
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}>
//                           <p>{name}</p>
//                         </li>
//                       )}
//                     </Draggable>
//                   );
//                 })}
//                 {provided.placeholder}
//               </ul>
//             )}
//           </Droppable>
//         </DragDropContext>
//       </header>
//     </div>
//   );
// };

// export default DragDropMatch;