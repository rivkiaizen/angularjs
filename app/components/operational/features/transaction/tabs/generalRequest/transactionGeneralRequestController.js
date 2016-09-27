'use strict';

var transactionGeneralRequestController = function ($log, $scope, $filter, $stateParams, transactionsService, ouTabsService,  TRANSACTION_TABS_INFO, transactionGeneralRequestViewsService) {

    'ngInject';
    /* ***************************************************
                      VARIABLES
     **************************************************** */
    var vm = this;
    vm.transactionID = $stateParams.transactionID;

    var currentTab = ouTabsService.getCurrentTab('transactionTabs' + vm.transactionID) || {};
    var transactionTab = ouTabsService.getCurrentTab('mainTabs') || {};

    vm.generalRequestInfo = TRANSACTION_TABS_INFO.generalRequest;
    vm.views = vm.generalRequestInfo.views;

    /*****************************************************
   *               METHODS - PRIVATE                   *
   *****************************************************/

    /*
     * @description: fire on init the controller
     */
    var initialize = function () {
        vm.data = currentTab.data = currentTab.data || {};
        if (!vm.data.initData) {
            vm.data.initData = true;
            vm.data.views = transactionGeneralRequestViewsService;
        }
        _watchTransactionCDM()
    };

    function _watchTransactionCDM() {
        $scope.$watch(function () {
            return transactionTab && transactionTab.data ? transactionTab.data.transactionCDM : null;
        }, function (newData, oldData) {
            if (newData && (oldData != newData || vm.data.transactionCDM != newData)) {
                changedCdm(newData);
            }
        });
    }

    function changedCdm(transactionCDM) {
        vm.data.transactionCDM = transactionCDM;

        //refresh view
        vm.changeView(vm.views.generalRequest, null);
    }

    /*****************************************************
     *                  METHODS                          *
     *****************************************************/
    vm.changeView = function (type, entity) {
        vm.data.currentView = {
            type: type,
            data: transactionTab.data.transactionCDM.GeneralRequest,
            view: vm.data.views[type].viewDetails,
            title: $filter('translate')(vm.data.views.generalRequest.title)
        };
        $scope.$emit('transaction:viewChange', vm.data.currentView);
    }

    /*****************************************************
     *                  EXECUTIONS                       *
     *****************************************************/
    initialize();
};

module.exports = transactionGeneralRequestController;