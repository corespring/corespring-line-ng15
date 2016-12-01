import _ from 'lodash'
import CorespringNg15Element from 'corespring-legacy-component-dependencies/support/corespring-ng15-element'
import 'corespring-legacy-line'

export default class CorespringLineNg15Element extends CorespringNg15Element {
  _legacyHtml(){
    return '<line id="' + this.getAttribute('pie-id') + '"></line>';
  }
}


