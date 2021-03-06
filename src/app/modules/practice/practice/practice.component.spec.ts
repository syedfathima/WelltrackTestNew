import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PracticeComponent } from './practice.component';

describe('PracticeComponent', () => {
	let component: PracticeComponent;
	let fixture: ComponentFixture<PracticeComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [PracticeComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PracticeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
