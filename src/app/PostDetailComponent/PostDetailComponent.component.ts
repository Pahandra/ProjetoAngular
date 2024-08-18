import { Component, OnInit } from '@angular/core';
import { jsonData } from '../core/models/json.model';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../core/service/getData.service';

@Component({
  selector: 'app-PostDetailComponent',
  templateUrl: './PostDetailComponent.component.html',
  styleUrls: ['./PostDetailComponent.component.css'],
})
export class PostDetailComponentComponent implements OnInit {
  postData!: jsonData[];
  post: jsonData | undefined;
  id: number = 0;

  constructor(private route: ActivatedRoute, private getData: GetDataService) {}

  ngOnInit() {
    // Obtenha os dados assim que o componente for inicializado
    this.getPostList();

    // Observe as mudanças de rota para buscar o ID do post
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.findPostById(this.id);
    });
  }

  getPostList() {
    this.getData.getDataJson().subscribe((data) => {
      this.postData = data;
      // Agora que os dados foram carregados, procure o post
      this.findPostById(this.id);
    });
  }

  findPostById(id: number) {
    if (this.postData) {
      this.post = this.postData.find((post) => post.id === id);
      console.log('Post encontrado:', this.post);
    }
  }
}
