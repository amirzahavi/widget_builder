import { TestBed, inject } from '@angular/core/testing';

import { WidgetBuilderService } from './widget-builder.service';

describe('WidgetBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidgetBuilderService]
    });
  });

  it('should be created', inject([WidgetBuilderService], (service: WidgetBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
