// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import React, { useState } from 'react';
// import './DragDrop.css'

// const DragDrop = (result) => {
//   const finalSpaceCharacters = [
//     {
//       id: 'test1',
//       name: 'test1',
//     },
//     {
//       id: 'test2',
//       name: 'test2',
//     },
//     {
//       id: 'test3',
//       name: 'test3',
//     },
//     {
//       id: 'test4',
//       name: 'test4',
//     },
//     {
//       id: 'test5',
//       name: 'test5',
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
//         <h1>Drag</h1>
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

//                 {/* <li>{provided.placeholder}<li>Home</li></li>
//                 <li>Right</li>
//                 <li><li>left</li></li> */}
//               </ul>
//             )}
//           </Droppable>
//         </DragDropContext>
//       </header>
//     </div>
//   );
// };

// export default DragDrop;
