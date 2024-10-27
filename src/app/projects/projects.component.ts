import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    { name: 'Personal Portfolio', image: '/assets/img/Personal Portfolio.png', link1: 'https://github.com/MohamedMongd',link2: 'https://github.com/MohamedMongd',number: 1 },
    { name: 'E-commerce Website', image: '/assets/img/E-commerce.png', link1: 'https://mohamedmongd.github.io/FreshCart/',link2: 'https://github.com/MohamedMongd/FreshCart',number: 5 },
    { name: 'task-managr', image: '/assets/img/screencapture_task-list.png', link1: 'https://mohamedmongd.github.io/task_manager/task-list',link2: 'https://github.com/MohamedMongd/task_manager',number: 2 },
    { name: 'Link Watts', image: '/assets/img/wats.png', link1: 'https://mohamedmongd.github.io/wats/',link2: 'https://github.com/MohamedMongd/wats',number: 1 },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
