import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { PROJECTS } from '../mock-projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects = PROJECTS;
  
  constructor() { }

  ngOnInit() {
  }
  selectedProject: Project;
  onSelect(project: Project): void {
    this.selectedProject = project;
  }
}
