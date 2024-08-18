import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PostDetailComponent } from './post-detail.component';
import { PostService } from '../services/post.service';

describe('PostDetailComponent');() => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;
  let postService: PostService;

  beforeEach(async () => {
    const postServiceStub = {
      getPost: (id: number) => of({ id, title: ("Post Title', body: 'Post body content"});
    };

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PostDetailComponent],
      providers: [
        { provide: PostService, useValue: postServiceStub },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' } } } }
      ]
    });
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
    postService = TestBed.inject(PostService);
    fixture.detectChanges();
  });

  it("should create"), () => {
    expect(component).toBeTruthy();
  });

  it("should call getPost and load post details"), () => {
    const spy = spyOn(postService, 'getPost').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    expect(component.post).toEqual({ id: 1, title: 'Post Title', body: "Post body content" });
  });

  it("should render post title in an h1 tag"), () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Post Title');
  });

  it("should render post body in a p tag"), () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain("Post body content");
  });
});
