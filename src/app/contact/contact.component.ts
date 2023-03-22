import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';
import {ContactService} from '../service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!:FormGroup;

  constructor(private _translationLoaderService: TranslationLoaderService, private contactService: ContactService, private fb: FormBuilder) {
    this._translationLoaderService.loadTranslations(english, french);

  }

  ngOnInit(): void {

    this.contactForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.compose([Validators.email])],
      subject: ['', Validators.required ],
      message: ['', Validators.required ]
    });
  }

  onAddEvent() {
    this.contactService.postMessage(this.contactForm.value).subscribe((response)=>{
     alert('succcesss');

    });
  }
}
