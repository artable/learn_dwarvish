

// //keyboard control
// let textBuffer = "";

// function pushToBuffer() {
//     $("#text-buffer").text(textBuffer)
// }
// $("#16A2").click(function(){
//     textBuffer += '\u16A2'; 
//     pushToBuffer();
// });
// $("#16B1").click(function(){
//     textBuffer += '\u16B1'; 
//     pushToBuffer();
// });
// $("#16B3").click(function(){
//     textBuffer += '\u16B3'; 
//     pushToBuffer();
// });
// $("#16A8").click(function(){
//     textBuffer += '\u16A8';
//     pushToBuffer();
// });
// $("#16BA").click(function(){
//     textBuffer += '\u16BA';
//     pushToBuffer();
// });
// $("#16BB").click(function(){
//     textBuffer += '\u16BB';
//     pushToBuffer();
// });
// $("#16E9").click(function(){
//     textBuffer += '\u16E9';
//     pushToBuffer();
// });
// $("#16A0").click(function(){
//     textBuffer += '\u16A0';
//     pushToBuffer();
// });
// $("#16E6").click(function(){
//     textBuffer += '\u16E6';
//     pushToBuffer();
// });
// $("#16C1").click(function(){
//     textBuffer += '\u16C1';
//     pushToBuffer();
// });
// $("#16AD").click(function(){
//     textBuffer += '\u16AD';
//     pushToBuffer();
// });
// $("#16B4").click(function(){
//     textBuffer += '\u16B4';
//     pushToBuffer();
// });
// $("#16C5").click(function(){
//     textBuffer += '\u16C5';
//     pushToBuffer();
// });
// $("#16D2").click(function(){
//     textBuffer += '\u16D2';
//     pushToBuffer();
// });
// $("#16C9").click(function(){
//     textBuffer += '\u16C9';
//     pushToBuffer();
// });
// $("#16A3").click(function(){
//     textBuffer += '\u16A3';
//     pushToBuffer();
// });
// $("#16B9").click(function(){
//     textBuffer += '\u16B9';
//     pushToBuffer();
// });
// $("#16A9").click(function(){
//     textBuffer += '\u16A9';
//     pushToBuffer();
// });
// $("#16CF").click(function(){
//     textBuffer += '\u16CF';
//     pushToBuffer();
// });
// $("#16B2").click(function(){
//     textBuffer += '\u16B2';
//     pushToBuffer();
// });
// $("#16DA").click(function(){
//     textBuffer += '\u16DA';
//     pushToBuffer();
// });
// $("#16DF").click(function(){
//     textBuffer += '\u16DF';
//     pushToBuffer();
// });
// $("#16DD").click(function(){
//     textBuffer += '\u16DD';
//     pushToBuffer();
// });
// $("#16B7").click(function(){
//     textBuffer += '\u16B7';
//     pushToBuffer();
// });
// $("#16C4").click(function(){
//     textBuffer += '\u16C4';
//     pushToBuffer();
// });
// $("#16CB").click(function(){
//     textBuffer += '\u16CB';
//     pushToBuffer();
// });
// $("#16E3").click(function(){
//     textBuffer += '\u16E3';
//     pushToBuffer();
// });
// $("#16BF").click(function(){
//     textBuffer += '\u16BF';
//     pushToBuffer();
// });
// $("#16DE").click(function(){
//     textBuffer += '\u16DE';
//     pushToBuffer();
// });
// $("#16EF").click(function(){
//     textBuffer += '\u16EF';
//     pushToBuffer();
// });
// $("#16D0").click(function(){
//     textBuffer += '\u16D0';
//     pushToBuffer();
// });
// $("#16C7").click(function(){
//     textBuffer += '\u16C7';
//     pushToBuffer();
// });
// $("#16E7").click(function(){
//     textBuffer += '\u16E7';
//     pushToBuffer();
// });

// const Keyboard = {
//     elements: {
//         main: null,
//         keysContainer: null,
//         keys: []
//     },

//     eventHandlers: {
//         oninput: null,
//         onclose: null
//     },

//     properties: {
//         value: "",
//         capsLock: false
//     },

//     init() {
//         // Create main elements
//         this.elements.main = document.createElement("div");
//         this.elements.keysContainer = document.createElement("div");

//         // Setup main elements
//         this.elements.main.classList.add("keyboard", "keyboard--hidden");
//         this.elements.keysContainer.classList.add("keyboard__keys");
//         this.elements.keysContainer.appendChild(this._createKeys());

//         this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

//         // Add to DOM
//         this.elements.main.appendChild(this.elements.keysContainer);
//         document.body.appendChild(this.elements.main);

//         // Automatically use keyboard for elements with .use-keyboard-input
//         document.querySelectorAll(".use-keyboard-input").forEach(element => {
//             element.addEventListener("focus", () => {
//                 this.open(element.value, currentValue => {
//                     element.value = currentValue;
//                 });
//             });
//         });
//     },

//     _createKeys() {
//         const fragment = document.createDocumentFragment();
//         const keyLayout = [
//             "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "backspace",
//             "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
//              "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
//              "done", "space"
//         ];

//         // Creates HTML for an icon
//         const createIconHTML = (icon_name) => {
//             return `<i class="material-icons">${icon_name}</i>`;
//         };

//         keyLayout.forEach(key => {
//             const keyElement = document.createElement("button");
//             const insertLineBreak = ["backspace", "enter", "?"].indexOf(key) !== -1;

//             // Add attributes/classes
//             keyElement.setAttribute("type", "button");
//             keyElement.classList.add("keyboard__key");

//             switch (key) {
//                 case "backspace":
//                     keyElement.classList.add("keyboard__key--wide");
//                     keyElement.innerHTML = createIconHTML("Backspace");

//                     keyElement.addEventListener("click", () => {
//                         this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
//                         this._triggerEvent("oninput");
//                     });

//                     break;

//                 case "caps":
//                     keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
//                     keyElement.innerHTML = createIconHTML("Capslock");

//                     keyElement.addEventListener("click", () => {
//                         this._toggleCapsLock();
//                         keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
//                     });

//                     break;

//                 case "enter":
//                     keyElement.classList.add("keyboard__key--wide");
//                     keyElement.innerHTML = createIconHTML("Enter");

//                     keyElement.addEventListener("click", () => {
//                         this.properties.value += "\n";
//                         this._triggerEvent("oninput");
//                     });

//                     break;

//                 case "space":
//                     keyElement.classList.add("keyboard__key--extra-wide");
//                     keyElement.innerHTML = createIconHTML("");

//                     keyElement.addEventListener("click", () => {
//                         this.properties.value += " ";
//                         this._triggerEvent("oninput");
//                     });

//                     break;

//                 case "done":
//                     keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
//                     keyElement.innerHTML = createIconHTML("close");

//                     keyElement.addEventListener("click", () => {
//                         this.close();
//                         this._triggerEvent("onclose");
//                     });

//                     break;

//                 default:
//                     keyElement.textContent = key.toLowerCase();

//                     keyElement.addEventListener("click", () => {
//                         this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
//                         this._triggerEvent("oninput");
//                     });

//                     break;
//             }

//             fragment.appendChild(keyElement);

//             if (insertLineBreak) {
//                 fragment.appendChild(document.createElement("br"));
//             }
//         });

//         return fragment;
//     },

//     _triggerEvent(handlerName) {
//         if (typeof this.eventHandlers[handlerName] == "function") {
//             this.eventHandlers[handlerName](this.properties.value);
//         }
//     },

//     _toggleCapsLock() {
//         this.properties.capsLock = !this.properties.capsLock;

//         for (const key of this.elements.keys) {
//             if (key.childElementCount === 0) {
//                 key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
//             }
//         }
//     },

//     open(initialValue, oninput, onclose) {
//         this.properties.value = initialValue || "";
//         this.eventHandlers.oninput = oninput;
//         this.eventHandlers.onclose = onclose;
//         this.elements.main.classList.remove("keyboard--hidden");
//     },

//     close() {
//         this.properties.value = "";
//         this.eventHandlers.oninput = oninput;
//         this.eventHandlers.onclose = onclose;
//         this.elements.main.classList.add("keyboard--hidden");
//     }
// };

// window.addEventListener("DOMContentLoaded", function () {
//     Keyboard.init();
// });