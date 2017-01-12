angular.module("decorated-high-charts").run(["$templateCache", function($templateCache) {$templateCache.put("DecoratedHighCharts.html","<div class=\"root\" style=\"position: relative;height:100%\">\r\n    <div class=\"control flex-main-container\">\r\n        <span class=\"flex-sub-container-left\">\r\n            <span ng-hide=\"chartOptions.disablePropertyChooser\">\r\n                <span ng-if=\"chartProperties.type == \'Scattered Plot\'\">\r\n                    <div class=\"restrict-dropdown-menu\" ng-hide=\"chartOptions.disableFirstProperty\">\r\n                        <label>X:</label>\r\n                        <input type=\"text\" ng-model=\"chartProperties.x_attribute\" class=\"form-control\"\r\n                               style=\"width: 12em; display: inline; height:25px;\"\r\n                               placeholder=\"Enter attribute\"\r\n                               typeahead=\"column as column.text for column in getValidColumns(numericalColumns) | filter:$viewValue:$emptyOrMatch | orderBy:\'text.toString()\'\"\r\n                               typeahead-focus\r\n                               typeahead-on-select=\"apiHandle.api.loadChart()\"\r\n                               typeahead-select-on-blur=\"true\"/>\r\n                    </div>\r\n                    <div class=\"restrict-dropdown-menu\" ng-hide=\"chartOptions.disableSecondProperty\">\r\n                        <label>Y:</label>\r\n                        <input type=\"text\" ng-model=\"chartProperties.y_attribute\" class=\"form-control\"\r\n                               style=\"width: 12em; display: inline; height:25px;\"\r\n                               placeholder=\"Enter attribute\"\r\n                               typeahead=\"column as column.text for column in getValidColumns(numericalColumns) | filter:$viewValue:$emptyOrMatch | orderBy:\'text.toString()\'\"\r\n                               typeahead-focus\r\n                               typeahead-on-select=\"apiHandle.api.loadChart()\"\r\n                               typeahead-select-on-blur=\"true\"/>\r\n                    </div>\r\n                </span>\r\n                <span ng-if=\"chartProperties.type == \'Column Chart\'\">\r\n                    <div class=\"restrict-dropdown-menu\" ng-hide=\"chartOptions.disableFirstProperty\">\r\n                        <label>X:</label>\r\n                        <input type=\"text\" ng-model=\"chartProperties.x_attribute\" class=\"form-control\"\r\n                               style=\"width: 12em; display: inline; height:25px;\"\r\n                               placeholder=\"Enter attribute\"\r\n                               typeahead=\"column as column.text for column in getValidColumns(categoricalColumns) | filter:$viewValue:$emptyOrMatch | orderBy:\'text.toString()\'\"\r\n                               typeahead-focus\r\n                               typeahead-on-select=\"apiHandle.api.loadChart()\"\r\n                               typeahead-select-on-blur=\"true\"/>\r\n                    </div>\r\n                    <div class=\"restrict-dropdown-menu\" ng-hide=\"chartOptions.disableSecondProperty\">\r\n                        <label>Y:</label>\r\n                        <input type=\"text\" ng-model=\"chartProperties.y_attribute\" class=\"form-control\"\r\n                               style=\"width: 12em; display: inline; height:25px;\"\r\n                               placeholder=\"Enter attribute\"\r\n                               typeahead=\"column as column.text for column in getValidColumns(numericalColumns) | filter:$viewValue:$emptyOrMatch | orderBy:\'text.toString()\'\"\r\n                               typeahead-focus\r\n                               typeahead-on-select=\"apiHandle.api.loadChart()\"\r\n                               typeahead-select-on-blur=\"true\"/>\r\n                    </div>\r\n                </span>\r\n                <span ng-if=\"chartProperties.type == \'Pie Chart\' || chartProperties.type == \'Box Plot\'\">\r\n                    <div class=\"restrict-dropdown-menu\" ng-hide=\"chartOptions.disableFirstProperty\">\r\n                        <label>Summarize:</label>\r\n                        <input type=\"text\" ng-model=\"chartProperties.analytic\" class=\"form-control\"\r\n                               style=\"width: 12em; display: inline; height:25px;\"\r\n                               placeholder=\"Enter attribute\"\r\n                               typeahead=\"column as column.text for column in getValidColumns(numericalColumns) | filter:$viewValue:$emptyOrMatch | orderBy:\'text.toString()\'\"\r\n                               typeahead-focus\r\n                               typeahead-on-select=\"apiHandle.api.loadChart()\"\r\n                               typeahead-select-on-blur=\"true\"/>\r\n                    </div>\r\n                    <div class=\"restrict-dropdown-menu\" ng-hide=\"chartOptions.disableSecondProperty\">\r\n                        <label style=\"padding-right: 10px;\">Group By:</label>\r\n                        <input type=\"text\" ng-model=\"chartProperties.group_by\" class=\"form-control\"\r\n                               style=\"width: 12em; display: inline; height:25px;\"\r\n                               placeholder=\"Enter attribute\"\r\n                               typeahead=\"column as column.text for column in getValidColumns(categoricalColumns) | filter:$viewValue:$emptyOrMatch | orderBy:\'text.toString()\'\"\r\n                               typeahead-focus\r\n                               typeahead-on-select=\"apiHandle.api.loadChart()\"\r\n                               typeahead-select-on-blur=\"true\"/>\r\n                    </div>\r\n                </span>\r\n            </span>\r\n            <span ng-hide=\"chartOptions.disableMoreOptions\" dhc-click-outside dhc-open-state=\"states.menuDisplays.moreOptions\"\r\n                              dhc-close-callback=\"toggleSlide(!states.menuDisplays.moreOptions,\'more-options\')\">\r\n                <a class=\"clickable\" style=\"text-decoration:none;padding-left:20px;\"\r\n                   ng-click=\"toggleSlide(!states.menuDisplays.moreOptions,\'more-options\');selected=\'\';\">\r\n                    <span class=\"fake-anchor-tag\">More Options</span>\r\n                    <i class=\"fa\" ng-class=\"{\'fa-chevron-up\': states.menuDisplays.moreOptions, \'fa-chevron-down\': !states.menuDisplays.moreOptions}\"></i>\r\n                </a>\r\n                <div class=\"more-options floating-form\" style=\"display: none;width:250px;\">\r\n                    <div ng-if=\"chartProperties.type == \'Scattered Plot\'\">\r\n                        <label style=\"padding-right: 10px;\">Group By:</label>\r\n                        <div class=\"restrict-dropdown-menu input-group\">\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                   ng-model=\"chartProperties.group_by\"\r\n                                   typeahead=\"column as column.text for column in getValidColumns(categoricalColumns) | filter:$viewValue:$emptyOrMatch | orderBy:\'text.toString()\'\"\r\n                                   typeahead-on-select=\"apiHandle.api.loadChart()\"\r\n                                   typeahead-focus/>\r\n                            <span class=\"dhc-clickable input-group-addon\" ng-click=\"chartProperties.group_by = undefined;apiHandle.api.loadChart()\">\r\n                                <strong>X</strong>\r\n                            </span>\r\n                        </div>\r\n                        <label>Radius:&nbsp;</label>\r\n                        <div class=\"restrict-dropdown-menu input-group\">\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                   ng-model=\"chartProperties.radius\"\r\n                                   typeahead=\"column as column.text for column in getValidColumns(numericalColumns) | filter:$viewValue:$emptyOrMatch | orderBy:\'text.toString()\'\"\r\n                                   typeahead-on-select=\"apiHandle.api.loadChart()\"\r\n                                   typeahead-focus/>\r\n                            <span class=\"dhc-clickable input-group-addon\" ng-click=\"chartProperties.radius = undefined;apiHandle.api.loadChart()\">\r\n                                <strong>X</strong>\r\n                            </span>\r\n                        </div>\r\n                        <div>\r\n                            <label>Regression:&nbsp;</label>\r\n                            <br/>\r\n                            <div class=\"btn-group\" dropdown>\r\n                                <button id=\"split-button\" type=\"button\" class=\"btn btn-default\">{{getRegressionText()}}</button>\r\n                                <button type=\"button\" class=\"btn btn-default\" dropdown-toggle>\r\n                                    <span class=\"caret\"></span>\r\n                                </button>\r\n                                <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"split-button\">\r\n                                    <li role=\"menuitem\" ng-repeat=\"type in chartFactory.regressionTypes\"\r\n                                        ng-click=\"apiHandle.api.changeRegressionType(type.tag)\">\r\n                                        <a href=\"#\">{{type.text}}</a>\r\n                                    </li>\r\n                                    <li role=\"menuitem\" ng-click=\"apiHandle.api.changeRegressionType()\">\r\n                                        <a href=\"#\">None</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                            <div ng-show=\"chartProperties.regression == \'polynomial\'\">\r\n                                <label>Regression Degree:</label>\r\n                                <input class=\"form-control\" type=\"number\" min=\"1\" ng-model=\"chartProperties.regression_degree\"\r\n                                       ng-change=\"apiHandle.api.timeoutLoadChart()\"/>\r\n                            </div>\r\n                        </div>\r\n                        <br/>\r\n                        <div>\r\n                            <div>\r\n                                <input type=\"checkbox\" ng-model=\"chartProperties.show_datalabel\" ng-click=\"apiHandle.api.timeoutLoadChart()\"/>\r\n                                Data Labels\r\n                            </div>\r\n                            <div style=\"padding-top:10px;\">\r\n                                <input type=\"checkbox\" ng-model=\"chartProperties.outlier_remove\" ng-click=\"apiHandle.api.timeoutLoadChart()\"/>\r\n                                Remove Outliers\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div ng-if=\"chartProperties.type == \'Column Chart\'\">\r\n                        <label>Group By:&nbsp;</label>\r\n                        <div class=\"restrict-dropdown-menu input-group\">\r\n                            <input type=\"text\" class=\"form-control\"\r\n                                   ng-model=\"chartProperties.group_by\"\r\n                                   typeahead=\"column as column.text for column in getValidColumns(categoricalColumns) | filter:$viewValue:$emptyOrMatch | orderBy:\'text.toString()\'\"\r\n                                   typeahead-on-select=\"apiHandle.api.loadChart()\"\r\n                                   typeahead-focus/>\r\n                            <span class=\"dhc-clickable input-group-addon\" ng-click=\"chartProperties.group_by = undefined;apiHandle.api.loadChart()\">\r\n                                <strong>X</strong>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div ng-if=\"chartProperties.type != \'Column Chart\' && chartProperties.type != \'Scattered Plot\'\">\r\n                        There are no other options for this type of chart\r\n                    </div>\r\n                </div>\r\n            </span>\r\n        </span>\r\n        <span class=\"flex-sub-container-right\">\r\n            <span ng-hide=\"chartOptions.disableChartType\" dhc-click-outside dhc-open-state=\"states.menuDisplays.changeChartType\"\r\n                              dhc-close-callback=\"toggleSlide(!states.menuDisplays.changeChartType,\'change-chart-type\')\">\r\n                <a class=\"clickable\" style=\"text-decoration:none;padding-right:20px;\"\r\n                   ng-click=\"toggleSlide(!states.menuDisplays.changeChartType,\'change-chart-type\');selected=\'\';\">\r\n                    <span class=\"fake-anchor-tag\">Chart type</span>\r\n                    <i class=\"fa\" ng-class=\"{\'fa-chevron-up\': states.menuDisplays.changeChartType, \'fa-chevron-down\': !states.menuDisplays.changeChartType}\"></i>\r\n                </a>\r\n                <div class=\"change-chart-type floating-form\" style=\"display: none;width:450px;right: 0px;\">\r\n                    <label>Chart Type:</label>\r\n                    <br/>\r\n                    <div class=\"btn-group\">\r\n                        <label class=\"btn btn-primary\" ng-model=\"chartProperties.type\" btn-radio=\"\'Pie Chart\'\" ng-click=\"changeChartType()\">Pie Chart</label>\r\n                        <label class=\"btn btn-primary\" ng-model=\"chartProperties.type\" btn-radio=\"\'Box Plot\'\" ng-click=\"changeChartType()\">Box Plot</label>\r\n                        <label class=\"btn btn-primary\" ng-model=\"chartProperties.type\" btn-radio=\"\'Column Chart\'\" ng-click=\"changeChartType()\">Column Chart</label>\r\n                        <label class=\"btn btn-primary\" ng-model=\"chartProperties.type\" btn-radio=\"\'Scattered Plot\'\" ng-click=\"changeChartType()\">Scattered Plot</label>\r\n                    </div>\r\n                    <br/>\r\n                    <br/>\r\n                    <label>Data to show:</label>\r\n                    <br/>\r\n                    <div class=\"btn-group\">\r\n                        <label class=\"btn btn-primary\" ng-model=\"chartProperties.dataToShow\" btn-radio=\"\'all\'\" ng-click=\"apiHandle.api.timeoutLoadChart()\">All Data</label>\r\n                        <label class=\"btn btn-primary\" ng-model=\"chartProperties.dataToShow\" btn-radio=\"\'selected\'\" ng-click=\"apiHandle.api.timeoutLoadChart()\">Selected Data</label>\r\n                    </div>\r\n                </div>\r\n            </span>\r\n            <span ng-hide=\"chartOptions.disableExporting\">\r\n                <span class=\"clickable\" style=\"padding-right:5px;color:#005da0;\" ng-click=\"exportXLS()\" title=\"Excel\"><i class=\"fa fa-file-excel-o\"></i></span>\r\n                <span class=\"clickable\" style=\"padding-right:5px;color:#005da0;\" ng-click=\"exportPDF()\" title=\"PDF\"><i class=\"fa fa-file-pdf-o\"></i></span>\r\n            </span>\r\n            <span class=\"clickable\" style=\"padding-right:5px;color:#005da0;\" ng-repeat=\"customButton in customButtons\" ng-click=\"customButton.callback()\">\r\n                <i class=\"fa\" ng-class=\"customButton.faClass\"></i>\r\n            </span>\r\n        </span>\r\n    </div>\r\n    <hr ng-hide=\"allPanelHidden()\"/>\r\n    <div class=\"chart-area-container\">\r\n        <div id=\"coordinatesPlace\">\r\n        </div>\r\n        <i ng-show=\"isProcessing\" class=\"fa fa-spinner fa-spin fa-3x spinner\" style=\"position:absolute;top:0;left:0\"></i>\r\n        <!-- this is where the stock chart goes -->\r\n        <div style=\"position:relative;height:100%\">\r\n            <alert ng-show=\"states.needAttrs\" close=\"states.needAttrs = false\" type=\"warning\" style=\"font-size: 12px;position: absolute;z-index:999\">\r\n                Please enter required attributes\r\n            </alert>\r\n            <div class=\"dhc-chart-toolbar\" ng-show=\"apiHandle.api.excludedPoints.length > 0\">\r\n                <a class=\"clickable\" ng-click=\"apiHandle.api.resetExcludedPoints()\">\r\n                    Reset Points <i class=\"fa fa-refresh\"></i>\r\n                </a>\r\n            </div>\r\n            <div ng-attr-id=\"{{chartId}}\" style=\"width:100%;height:100%;\" ng-class=\"{\'dhc-opaque\': states.needAttrs}\">\r\n            </div>\r\n        </div>\r\n        <alert ng-show=\"alerts.generalWarning.active\" style=\"position:absolute;bottom:0;right:0;\"\r\n               close=\"alerts.generalWarning.active = false\" type=\"danger\">\r\n            {{alerts.generalWarning.message}}\r\n        </alert>\r\n    </div>\r\n    <!--<div>-->\r\n        <!--<span style=\"position:absolute;bottom:0;right:0;\">-->\r\n            <!--X: {{states.xVal}}-->\r\n        <!--</span>-->\r\n    <!--</div>-->\r\n</div>");}]);