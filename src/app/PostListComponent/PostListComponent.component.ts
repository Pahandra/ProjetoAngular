import { Component, Input, OnInit } from ['@angular/core'];
import { jsonData } from ['../core/models/json.model'];

@Component({
  selector: ['app-PostListComponent'],
  templateUrl: ['./PostListComponent.component.html'],
  styleUrls: ['./PostListComponent.component.css'],
})
export class PostListComponentComponent implements OnInit {
   posts: any[] = [];
  @Input() postData!: jsonData[];
  currentPage: number = 1;
  postsPerPage: number = 10;
  totalPages: number = 0;
  paginatedPosts: any[] = [];

  constructor() {}

  ngOnInit() {
    this.getPostList();
  }

  getPostList() {
    this.totalPages = Math.ceil(this.postData.length / this.postsPerPage);
    this.updatePaginatedPosts();
  }

  updatePaginatedPosts() {
    const start = (this.currentPage - 1) * this.postsPerPage;
    const end = start + this.postsPerPage;
    this.paginatedPosts = this.postData.slice(start, end);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedPosts();
    }
  }

  truncateText(text: string, limit: number): string {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }
}
