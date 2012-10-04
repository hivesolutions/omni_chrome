// Hive Omni ERP
// Copyright (C) 2008-2012 Hive Solutions Lda.
//
// This file is part of Hive Omni ERP.
//
// Hive Omni ERP is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Hive Omni ERP is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Hive Omni ERP. If not, see <http://www.gnu.org/licenses/>.

// __author__    = João Magalhães <joamag@hive.pt> & Tiago Silva <tsilva@hive.pt>
// __version__   = 1.0.0
// __revision__  = $LastChangedRevision$
// __date__      = $LastChangedDate$
// __copyright__ = Copyright (c) 2008-2012 Hive Solutions Lda.
// __license__   = GNU General Public License (GPL), Version 3

jQuery(document).ready(function() {
            // retrieves the clear settings element
            var clearSettings = jQuery(".clear-settings");

            // registers for the click event on the clear settings
            // element (button)
            clearSettings.click(function() {
                        // sends a request to the background to
                        // clear the current data cache
                        chrome.extension.sendRequest({
                                    messageType : "clear"
                                });
                    });

            // tenho de utilizar um sistema de templates
            // do ux para renderizar isto como deve de ser
            // criar uma abstracao de troca de pagina para
            // o ux depois ate pode ser utilizada no frontdoor
            // na parte de ajax
            jQuery.ajax({
                        url : "background.html",
                        error : function(request, status, error) {
                        },
                        success : function(data) {
                            console.info(data);
                        }
                    });
        });
