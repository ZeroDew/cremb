<template>
    <div v-cloak>
        <van-sku v-model="carshow" :sku="sku" :goods="goods" :goods-id="id" :hide-stock="sku.hide_stock"
            @buy-clicked="onBuyClicked" ref="sku">
            <template #sku-header-price="props">
                <div class="van-sku__goods-price">

                    <span class="van-sku__price-symbol">￥</span>
                    <span class="van-sku__price-num">{{ props.price }}</span>
                </div>
            </template>

            <template #sku-actions="props">
                <div class="van-sku-actions">

                    <van-button square size="large" type="info" @click="props.skuEventBus.$emit('sku:buy')">
                        确定
                    </van-button>
                </div>
            </template>

        </van-sku>
    </div>
</template>

<script>
import { getDetail } from '@/api/home';
import { addCar } from '@/api/cart';
import { mapState } from 'vuex';
import { Toast } from 'vant';
export default {
    name: 'addcar',
    data() {
        return {
            productAttrUnique: 0,//商品属性ID
            productId: 0,//商品ID

            carshow: false,
            sku: {
                tree: [

                    {
                        k: '颜色', // skuKeyName：规格类目名称
                        k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        v: [
                            {
                                id: '1',
                                name: '红色',
                                // imgUrl: 'https://img01.yzcdn.cn/2.jpg',
                                previewImgUrl: 'https://img01.yzcdn.cn/2.jpg',
                            }
                        ],
                        largeImageMode: false, //  是否展示大图模式
                    }
                ],
                // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                list: [
                    {
                        id: 2259, // skuId
                        s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
                        price: 144200, // 价格（单位分）
                        stock_num: 83 // 当前 sku 组合对应的库存
                    }
                ],
                price: '1.00', // 默认价格（单位元）
                stock_num: 227, // 商品总库存
                collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false, // 是否无规格商品
                messages: [

                ],
                hide_stock: false // 是否隐藏剩余库存
            },
            goods: {
                // 默认商品 sku 缩略图
                picture: require('@/assets/images/logo.png'),
            }
        }


    },
    computed: {
        ...mapState(['userinfo', 'isLogin'])
    },
    props: {
        id: {
            default: ''
        }, show: {
            type: Boolean
        }
    },
    methods: {
        onBuyClicked() {
        
            //添加购物车
            // this.carshow = false;
            if (this.isLogin) {
                let cartNum = this.$refs.sku.getSkuData().selectedNum
                let isNew = false;
                console.log(cartNum, isNew, this.productAttrUnique, this.productId);
                addCar(cartNum, isNew, this.productAttrUnique, this.productId, this.userinfo).then(res => {
                    if (res.code == 200) {
                        this.carshow = false
                      
                        Toast.success('添加成功');
                        setTimeout(() => {
                            Toast.clear()
                            this.$router.push('/cart')
                        }, 500)
                    } else {
                        Toast.fail('添加失败'),
                            setTimeout(() => {
                                Toast.clear()
                            }, 500);
                    }

                })
            } else {
                this.carshow = false
                Toast.fail('请先登录'),
                    setTimeout(() => {
                        Toast.clear();
                        this.$router.push('/login')
                    }, 500);
            }

        },
        getcar(id) {
            if (id != '') {
                getDetail(id).then(res => {
                    if (res) {
                        let allType = Object.keys(res.data.productValue)
                        let v = [];
                        let list = [];
                        allType.forEach(ele => {
                            this.productId = res.data.productValue[ele].productId
                            this.productAttrUnique = res.data.productValue[ele].id
                            v.push({
                                id: res.data.productValue[ele].id,
                                name: res.data.productValue[ele].suk,
                                previewImgUrl: res.data.productValue[ele].image
                            });
                            list.push({
                                id: res.data.productValue[ele].id,
                                s1: res.data.productValue[ele].id,
                                price: res.data.productValue[ele].price,
                                stock_num: res.data.productValue[ele].stock
                            })
                        })
                        this.sku.tree[0].v = v;
                        this.sku.list = list;
                        this.sku.price = res.data.productValue[allType[0]].price
                    }
                })
            }

        }

    },
    watch: {
        show() {
            this.carshow = true
        },
        id() {
            this.getcar(this.id)
        }
    },
    created() {
        this.getcar(this.id)
    },
    mounted() {
        this.$refs.sku.getSkuData()
    }
}
</script>

<style lang="less" scoped></style>