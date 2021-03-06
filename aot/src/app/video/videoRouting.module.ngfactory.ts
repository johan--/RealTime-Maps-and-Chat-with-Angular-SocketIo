/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../../src/app/video/videoRouting.module';
import * as import2 from '@angular/router';
import * as import3 from './videos.component.ngfactory';
import * as import4 from './videoSingle.component.ngfactory';
import * as import5 from '../../../../src/app/video/videos.component';
import * as import6 from '../../../../src/app/video/videoSingle.component';
class VideoRoutingInjector extends import0.ɵNgModuleInjector<import1.VideoRouting> {
  _RouterModule_0:import2.RouterModule;
  _VideoRouting_1:import1.VideoRouting;
  _ROUTES_2:any[];
  constructor(parent:import0.Injector) {
    super(parent,[
      import3.VideosComponentNgFactory,
      import4.VideoSingleComponentNgFactory
    ]
    ,([] as any[]));
  }
  createInternal():import1.VideoRouting {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ɵa,(null as any)),this.parent.get(import2.Router,(null as any)));
    this._VideoRouting_1 = new import1.VideoRouting();
      this._ROUTES_2 = [[
        {
          path: '',
          component: import5.VideosComponent
        }
        ,
        {
          path: 'videoSingle',
          component: import6.VideoSingleComponent
        }
        ,
        {
          path: 'videoSingle/:id',
          component: import6.VideoSingleComponent
        }
        ,
        {
          path: ':id',
          component: import6.VideoSingleComponent
        }

      ]
    ];
    return this._VideoRouting_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import1.VideoRouting)) { return this._VideoRouting_1; }
    if ((token === import2.ROUTES)) { return this._ROUTES_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const VideoRoutingNgFactory:import0.NgModuleFactory<import1.VideoRouting> = new import0.NgModuleFactory<any>(VideoRoutingInjector,import1.VideoRouting);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2FsYW4vYXBwL2FsZXMvc2Fsb24vc3JjL2FwcC92aWRlby92aWRlb1JvdXRpbmcubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2FsYW4vYXBwL2FsZXMvc2Fsb24vc3JjL2FwcC92aWRlby92aWRlb1JvdXRpbmcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
