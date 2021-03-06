/**
 * Copyright 2011 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

window.onload = function() {
    var url = unescape(window.location.href.match(/from=([^&]+)/)[1]);
    var adapterName = OAuth2.lookupAdapterName(url.substring(0,
        url.indexOf("?")));
    var finisher = new OAuth2(adapterName, OAuth2.FINISH, null,
        function(error) {
            document.body.innerHTML = error;
        });
}
