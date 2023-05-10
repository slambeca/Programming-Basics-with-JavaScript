function projectsCreation(input) {

    let name = input[0];
    let timeForOneProject = 3;
    let countProjects = Number(input[1]);

    let result = timeForOneProject * countProjects;

    console.log(`The architect ${name} will need ${result} hours to complete ${countProjects} project/s.`);

}

projectsCreation(["George", 4]);