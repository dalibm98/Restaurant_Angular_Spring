import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { testTotal,CommandePageComponent } from './commande-page.component';

fdescribe('CommandePageComponent', () => {
  let component: CommandePageComponent;
  let fixture: ComponentFixture<CommandePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandePageComponent ],
      imports: [HttpClientModule],
      providers:  []
    })
    .compileComponents();
0
    fixture = TestBed.createComponent(CommandePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should display total price', () => {
    const result = testTotal(10,20);    
    expect(result).toBe(200);
})


});
