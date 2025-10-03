import { Student } from "./myclasses.mjs";

if (document.readyState === "loading") {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  console.log('init called');
  const student1 = new Student("Jane", "Doe", "Biology");
  console.log(student1);
}