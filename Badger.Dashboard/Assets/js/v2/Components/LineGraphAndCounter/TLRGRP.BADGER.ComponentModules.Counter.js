﻿(function () {
    'use strict';

    TLRGRP.namespace('TLRGRP.BADGER.Dashboard.ComponentModules');

    TLRGRP.BADGER.Dashboard.ComponentModules.Counter = function () {
        var containerElement = $('<div class="v2-graph-counter">Errors in last 10mins</div>');
        var indicatorElement = $('<div class="v2-graph-counter-indicator hidden"></div>').appendTo(containerElement);
        var counterValueElement = $('<strong class="v2-graph-counter-value">-</strong>').appendTo(containerElement);
        var lastValue;

        return {
            appendTo: function (container) {
                container.append(containerElement);
            },
            appendToLocation: function () {
                return 'content';
            },
            setValue: function (value) {
                counterValueElement.text(value);

                if (lastValue && lastValue !== value) {
                    indicatorElement.removeClass('hidden');
                    
                    if (value > lastValue) {
                        indicatorElement
                            .addClass('bad')
                            .removeClass('down');
                    } else {
                        indicatorElement
                            .removeClass('bad')
                            .addClass('down');
                    }
                }

                lastValue = value;
            }
        };
    };
})();

