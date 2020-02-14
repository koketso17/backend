import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootComponent } from './root.component';

import { Component } from '@angular/core';
import Character from './Character';
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   characters: Character[] = [
    {
    firstName: 'Mpho',
    lastName: 'Nyambeni',
    PhoneNum: 'Male',
    e-mail: 'Alive@gmail.com'
    },
    {
      firstName: 'Mampho',
    lastName: 'Nyambeni',
    PhoneNum: 'Male',
    e-mail: 'Alive@gmail.com'
    },
    {
      firstName: 'Dipho',
    lastName: 'Nyambeni',
    PhoneNum: 'Male',
    e-mail: 'Alive@gmail.com'
    },
    {
      firstName: 'Sipho',
    lastName: 'Nyambeni',
    PhoneNum: 'Male',
    e-mail: 'Alive@gmail.com'
    }
  ];
}

describe('RootComponent', () => {
  let component: RootComponent;
  let fixture: ComponentFixture<RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});