const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
          sectionNum: 1,
          roomNum: "STC 353",
          enrolled: 26,
          days: "TTh",
          instructor: "Bro T",
        },
        {
          sectionNum: 2,
          roomNum: "STC 347",
          enrolled: 25,
          days: "TTh",
          instructor: "Sis A",
        },
        {
            sectionNum: 3,
            roomNum: "STC 357",
            enrolled: 25,
            days: "TTh",
            instructor: "Elder A",
          },
      ],
      enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        // const sectionIndex = this.sections.findIndex(
        //   (section) => section.sectionNum == sectionNum
        // );
        // if (sectionIndex >= 0) {
        //   this.sections[sectionIndex].enrolled++;
        //   renderSections(this.sections);
        // }
        
        let sectionIndex =this.sections.sectionNum  
        sectionIndex = sectionNum
        
        if (sectionIndex >= 0){
            let neededIndex = sectionIndex - 1
            this.sections[neededIndex].enrolled++
        }
          renderSections(this.sections);
        
      },
      
      dropStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        // const sectionIndex = this.sections.findIndex(
        //   (section) => section.sectionNum == sectionNum
        // );
        // if (sectionIndex >= 0) {
        //   this.sections[sectionIndex].enrolled--;
        //   renderSections(this.sections);
        // }
        
        let sectionIndex =this.sections.sectionNum  
        sectionIndex = sectionNum
        
        if (sectionIndex >= 0){
            let neededIndex = sectionIndex - 1
            this.sections[neededIndex].enrolled--
        }
          renderSections(this.sections);
        
      },
  };


 function setCourseName(course){
     const courseName = document.querySelector('#courseName')
     const coursecode = document.querySelector('#courseCode')
     courseName.textContent = course.name
     coursecode.textContent = course.code
 }  
 
 
 function sectionTemplate(section){
     return `<tr>
     <td>${section.sectionNum}</td>
     <td>${section.roomNum}</td>
     <td>${section.enrolled}</td>
     <td>${section.days}</td>
     <td>${section.instructor}</td>
     </tr>`
     
 }
 
 function renderSections(sections){
     const html = sections.map(sectionTemplate)
     const addCourse = document.querySelector('#sections')
     addCourse.innerHTML = html.join('')
 }

 document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
  });
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
  });
 
 setCourseName(aCourse)
 renderSections(aCourse['sections'])