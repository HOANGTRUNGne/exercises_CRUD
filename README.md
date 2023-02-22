 <Form.Item shouldUpdate>
                            {(form) => {
                                console.log(form.getFieldValue(['cart', index]))
                               const {quantity = 1, price = 0} = form.getFieldValue(['cart', index]) || {}
                               // form.setFieldValue(["cart", index, 'amount'], 10)
                               //  return   <Form.Item noStyle name={["cart", index, 'amount']}>
                               //      <AmountInput/>
                               //  </Form.Item>
                                return Number(quantity) * Number(price)
                            }}
                        </Form.Item>
