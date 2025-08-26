import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() formTitle: string = '';
  @Input() fields:
    {
      [key: string]: { type: string, label: string, placeholder?: string, span?: string }
    } = {};

  @Input() submitButtonText: string = '';
  @Input() formGroup!: FormGroup;
  @Output() submitEvent = new EventEmitter<void>();

  ngOnInit() {
    if (!this.formGroup) {
      this.initializeForm();
    }
  }

  private initializeForm() {
    const group: any = {};

    Object.keys(this.fields).forEach(fieldKey => {
      group[fieldKey] = new FormControl('', Validators.required);
    });

    this.formGroup = new FormGroup(group);
  }

  onSubmit() {
    this.submitEvent.emit();
  }

  setRating(fieldKey: string, value: number) {
    const control = this.formGroup.get(fieldKey);
    if (control) {
      control.setValue(value);
    }
  }

  objectKeys(obj: any) {
    return Object.keys(obj);
  }
}