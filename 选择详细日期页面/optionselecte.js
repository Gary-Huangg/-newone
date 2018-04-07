//可选时间数组
        var timeArr = ['08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00'];
        //可选地点数组
        var Location = ['办公室','8楼茶水间','7楼茶水间','6楼茶水间'];

        var mobileSelect1 = new MobileSelect({
            trigger: '#trigger_Start',
            title: '开始时间选择',
            wheels: [
                        {data: timeArr}
                    ],
            position:[2], //初始化定位 打开时默认选中的哪个 如果不填默认为0
            transitionEnd:function(indexArr, data){
                //console.log(data);
            },
            callback:function(indexArr, data){
                console.log(data);
            }
        });

        var mobileSelect2 = new MobileSelect({
            trigger: '#trigger_End',
            title: '结束时间选择',
            wheels: [
                        {data: timeArr}
                    ],
            position:[2], //初始化定位 打开时默认选中的哪个 如果不填默认为0
            transitionEnd:function(indexArr, data){
                //console.log(data);
            },
            callback:function(indexArr, data){
                console.log(data);
            }
        });

        var mobileSelect3 = new MobileSelect({
            trigger: '#trigger_Location',
            title: '地点选择',
            wheels: [
                        {data: Location}
                    ],
            position:[2], //初始化定位 打开时默认选中的哪个 如果不填默认为0
            transitionEnd:function(indexArr, data){
                //console.log(data);
            },
            callback:function(indexArr, data){
                console.log(data);
            }
        });