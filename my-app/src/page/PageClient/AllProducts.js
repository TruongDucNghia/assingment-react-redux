import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getProduct } from '../../api/products'

const AllProducts = () => {
    const [product, setProduct] = useState([])
    useEffect(() =>{
        const getAll = async () =>{
            const {data} = await getProduct()
            setProduct(data)
        }
        getAll()
    }, []);
    // console.log(product);
    return (
        <div>
            <main className="body__product">
                <div className="product__header">
                    <div className="proH__title">
                        <h3>Tất cả sản phẩm</h3>
                    </div>
                    <div className="proH__text1">
                        <p>({product?.length} sản phẩm)</p>
                    </div>
                    <div className="proH__text2">
                        <p>Bạn đang tìm kiếm những sản phẩm hoàn hảo phù hợp với mọi thứ hay chiếc váy dễ thương nhất lấy cảm
                            hứng từ
                            KOODING</p>
                    </div>
                </div>
                <div className="product__content">
                    <div className="proC__fist">
                        <div className="proC__title">
                            <p>Chọn mua những gì phù hợp với bạn</p>
                        </div>
                        {/* pagination */}
                        <div id="paging1" className="proC__paging">
                            <nav className="pages">
                                <li className="number__paging">
                                    <span className="numB numB__active">1</span>                      </li>
                            </nav>
                        </div>
                    </div>
                    <div className="proC__filters">
                        <form className="form__filter" method="POST">
                            <div className="select__price">
                                <div id="price" className="filter__title">
                                    <p>Giá</p>
                                    <i className="fas fa-chevron-down" />
                                </div>
                                <div className="box__filter__price none">
                                    {/* khi ng dùng thay đổi value input hidden -> show khoảng giá dưới trên range */}
                                    <input type="hidden" name="min_price" id="hidden_minimum_price" defaultValue={0} />
                                    <input type="hidden" name="max_price" id="hidden_maximum_price" defaultValue={10000000} />
                                    <p id="price_show">
                                        Từ 10 nghìn đến 10 triệu                          </p>
                                    <div className="price_range" id="price_range">
                                    </div>
                                    {/* btn filter */}
                                    <button type="submit" className="text-center btn btn-secondary mt-2 form-control" name="btn_filter_price">Áp dụng</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <div class="" id="test"></div> */}
                    <div className="proC__show">
                        <div className="proC__allItem">
                            {product?.map(item => 
                            <form className="proC__item">
                                <div className="proC__item__img">
                                    <NavLink to={`/products/${item?.id}/detail`}>
                                        <img src={item?.img} alt width="100%" />
                                    </NavLink>
                                </div>
                                <div className="proC__item__Name">
                                    <p>{item?.name}</p>
                                </div>
                                <div className="proC__item__PC">
                                    <div className="proC__item__price">
                                        <p>{Number(item?.price).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                                    </div>
                                   
                                </div>
                                <div className="proC__love">
                                    <span className="proC__love__icon btn_add_fa">
                                        {/* // xử lí nếu sp đã tồn tại favo thì cho icon heart màu đỏ */}
                                        <i className="far fa-heart" />
                                        
                                    </span>
                                </div>
                                {/* <div className="proC__sale">
                                    <p className="item__sale">-1%</p>
                                </div> */}
                            </form>)}
                            
                            
                        </div>
                        {/* end copy */}
                        <div className="proC__fist2">
                            {/* pagination */}
                            <div id="paging2" className="proC__paging">
                                <nav className="pages">
                                    <li className="number__paging">
                                        <span className="numB numB__active">1</span>                          </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default AllProducts