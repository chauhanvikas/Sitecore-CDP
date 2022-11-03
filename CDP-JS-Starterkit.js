window.mobileCheck = function () {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
var channeltype;
if (window.mobileCheck()) {
    channeltype = "MOBILE_WEB";
}
else {
    channeltype = "WEB";
}

var PageUrlsplit = [];
PageUrlsplit = window.location.pathname.split('/');


var SitecoreCDPVariable = {
    _client_key: "",
    _target: "https://api.boxever.com/v1.2",
    _cookie_domain: "",
    _pointOfSale: "Demo",
    _web_flow_target: "https://d35vb5cccm4xzp.cloudfront.net",
    url: "",
    pageName: "/" === window.location.pathname ? "home" : PageUrlsplit[PageUrlsplit.length - 1]
},
    SubscribeContactUS = {
        init: function (e) {
            SubscribeContactUS.config = {
                page: window.location.pathname,
                _firstName: $(".firstname").val(),
                _lastName: $(".lastname").val(),
                _gender: $("input:radio:checked").val(),
                _email: $(".email").val(),
                _mobileNo: $(".phoneno").val()
            }, SubscribeContactUS.setup()
        },
        setup: function () {
            $(document).on("click", ".btncontactus", SubscribeContactUS.CreateGuestOnContactUs)
        },
        CreateGuestOnContactUs: function () {
            var e = {
                browser_id: Boxever.getID(),
                channel: channeltype,
                language: "EN",
                currency: "USD",
                page: SitecoreCDPVariable.pageName,
                pos: SitecoreCDPVariable._pointOfSale,
                type: "IDENTITY",
                email: $(".email").val(),
                title: "Mr",
                firstname: $(".firstname").val(),
                lastname: $(".lastname").val(),
                gender: $("input:radio:checked").val(),
                mobile: $(".phoneno").val(),
                phone: $(".phoneno").val()
            };
            var CreateGuestCustomEventVariable = {
                "browser_id": Boxever.getID(),
                "channel": channeltype,
                "language": "EN",
                "currency": "USD",
                "page": SubscribeContactUS.config.page,
                "pos": SitecoreCDPVariable._pointOfSale,
                "channel": channeltype,
                "type": "ADD_TO_CONTACT",

            };
            _boxeverq.push(function () {
                Boxever.eventCreate(e, function (e) { }, "json")
                Boxever.eventCreate(CreateGuestCustomEventVariable, function (data) { }, 'json');
            })

            $.ajax({
                url: "https://api.boxever.com/v2/guests?email=" + $(".email").val(),
                contentType: 'application/json; charset=UTF-8',
                async: false,
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "Basic cHNmdTZ1aDA1aHNyOWMzNHJwdGxyMDZkbjg2NGNxcng6dXo5aDgwM2VydHV2eGNiOWpoMmN1MDV0ODdhdDg1bmw="
                },
                type: "Get",
                success: function (data) {
                    if (data == null || data.status == null || data.status === "ERROR") {
                        //ShowErrorNotification();
                        var dataresult = JSON.stringify(data);

                        SitecoreCDPVariable.url = data.items[0].href;
                        AddUpdateExtendedField.ExecuteExtendedField();
                    }
                }
            });

        }
    },
    AddUpdateExtendedField = {

        ExecuteExtendedField: function () {
            // Define the Boxever queue
            var interest = $(".interest option:selected").text();
            $.ajax({
                url: SitecoreCDPVariable.url + "/extExt",
                contentType: 'application/json; charset=UTF-8',
                async: false,
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "Basic cHNmdTZ1aDA1aHNyOWMzNHJwdGxyMDZkbjg2NGNxcng6dXo5aDgwM2VydHV2eGNiOWpoMmN1MDV0ODdhdDg1bmw="
                },
                data: JSON.stringify({ "key": "userinterest", "Interest": interest }),
                type: "Post",
                success: function (data) {
                    if (data == null || data.status == null || data.status === "ERROR") {
                        //ShowErrorNotification();
                        console.log(JSON.stringify(data.status));
                    }
                }
            });

        }
    },
    
    AddLocationTosession = {
        init: function (e) {

            AddLocationTosession.config = {
                page: window.location.pathname
            }, AddLocationTosession.setup()
        },
        setup: function () {
            $(document).on("click", ".btnaddress", AddLocationTosession.UpdateLocationSession)
        },
        UpdateLocationSession: function () {
            var e = {
                "channel": channeltype,
                "type": "VIEW",
                "language": "EN",
                "currency": "EUR",
                "page": SitecoreCDPVariable.pageName,
                "pos": "retailsite123.com",
                "browser_id": "56860bff-94ba-4d84-aa37-2b5a83d5411b",
                "sessionData": {
                    "deep_link": "https://www.retailsite123.com/search?product=shoes",
                    "is_logged_in": true,
                    "assistance": false
                }
            };
            _boxeverq.push(function () {
                Boxever.eventCreate(e, function (e) { }, "json")
            })
        }
    },

    AddItemtoCart = {
        init: function (e) {
            AddItemtoCart.config = {
                page: window.location.pathname
            }, AddItemtoCart.setup()
        },
        setup: function () {
            $('#AddToCart').click(function () {
                AddItemtoCart.AddProductToCart();
            });
        },
        AddProductToCart: function () {
            var d = new Date();
            var e = {
                type: "ADD",
                channel: channeltype,
                browser_id: Boxever.getID(),
                language: "EN",
                currency: "USD",
                page: AddItemtoCart.config.page,
                pos: SitecoreCDPVariable._pointOfSale,
                product: {
                    type: "shoe",
                    item_id: $('#product-price-info').attr('productid'),
                    name: $('#displayName').text(),
                    orderedAt: d.toISOString(),
                    quantity: parseInt($('#Quantity').val()),
                    price: parseInt($('#product-price-info').attr('adjustedprice')),
                    "productId": $('#product-price-info').attr('productid'),
                    "currencyCode": "USD",
                    "originalPrice": parseInt($('#product-price-info').attr('listprice')),
                    "originalCurrencyCode": "USD",
                    "referenceId": $('#product-price-info').attr('productid')
                }
            };
            _boxeverq.push(function () {
                Boxever.eventCreate(e, function (e) { }, "json")
            })
        }
    },


    Checkout = {
        init: function (e) {
            Checkout.config = {
                page: window.location.pathname
            }, Checkout.setup()
        },
        setup: function () {
            $('#checkOutBtn').click(function () {
                Checkout.CheckoutItems();
            });
        },
        CheckoutItems: function () {
            var e = {
                type: "CHECKOUT",
                channel: channeltype,
                browser_id: Boxever.getID(),
                language: "EN",
                currency: "USD",
                page: Checkout.config.page,
                pos: SitecoreCDPVariable._pointOfSale,
                reference_id: "-NA-",
                status: "PENDING"
            };
            _boxeverq.push(function () {
                Boxever.eventCreate(e, function (e) { }, "json")
            })
        }
    },
    Search = {
        init: function (e) {
            Search.config = {
                page: window.location.pathname
            }, Search.setup()
        },
        setup: function () {
            $('#btnSearchBox').click(function () {

                Search.SearchItems();
            });
        },
        SearchItems: function () {
            var e = {
                type: "SEARCH",
                channel: channeltype,
                browser_id: Boxever.getID(),
                language: "EN",
                currency: "USD",
                page: "/search",
                product_name: $('#txtSearchBox').val(),
                product_type: "shoe",
                pos: SitecoreCDPVariable._pointOfSale

            };
            _boxeverq.push(function () {
                Boxever.eventCreate(e, function (e) { }, "json")
            })
        }
    },
    CollectPageView = {
        init: function (e) {
            CollectPageView.config = {
                page: "/" === window.location.pathname ? "home" : window.location.pathname
            }, CollectPageView.setup()
        },
        setup: function () {
			if(SitecoreCDPVariable.pageName!=="storeoffer.html")
            CollectPageView.ExecutePageView()
        },
        ExecutePageView: function () {
            var e = {
                browser_id: Boxever.getID(),
                channel: channeltype,
                type: "VIEW",
                language: "EN",
                currency: "USD",
                page: SitecoreCDPVariable.pageName,
                pos: SitecoreCDPVariable._pointOfSale,
                sessionData: {
                    "country":  $(".countryid").text() ==="N/A" ? "IN" : $(".countryid").text().trim() ,
                    "city": $(".cityId").text().trim() ==="N/A" ? "Noida" : $(".cityId").text().trim(),

                }
            };
            _boxeverq.push(function () {
                Boxever.eventCreate(e, function (e) { }, "json")
            })
        }
    };





$(document).ready(UpdateGeoLoc.init), $(document).ready(CollectPageView.init), $(document).ready(SubscribeContactUS.init),   $(document).ready(AddItemtoCart.init), $(document).ready(Checkout.init), $(document).ready(Search.init);