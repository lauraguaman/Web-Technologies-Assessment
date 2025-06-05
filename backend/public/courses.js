async function getCourses() {
  const response = await fetch("http://localhost:3000/courses");
  const data = await response.json();
  return data;
}

async function createCourses() {
  const undergradContainer = document.querySelector(".undergraduated-courses");
  const postgradContainer = document.querySelector(".postgraduated-courses");

  const courses = await getCourses();

  courses.forEach((course) => {
    const { name, description, url, level, instructor, duration, image } =
      course;

    const html = `
      <div class="course-card">
        <img src="${image}" alt="${name}">
        <div class="course-info">
          <h3>${name}</h3>
          <p>${description}</p>
          <p><strong>Instructor:</strong> ${instructor}</p>
          <p><strong>Duration:</strong> ${duration}</p>
          <a href="${url}" class="btn-2">JOIN NOW</a>
        </div>
      </div>
    `;

    if (level === "undergraduate" && undergradContainer) {
      undergradContainer.innerHTML += html;
    }

    if (level === "postgraduate" && postgradContainer) {
      postgradContainer.innerHTML += html;
    }
  });
}

createCourses();
