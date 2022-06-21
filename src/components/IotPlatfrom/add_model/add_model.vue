<template>
  <div>
    <a-button type="primary" @click="showModal">
      新建物模型
    </a-button>
    <a-modal
 :visible="visible"
 title="创建物模型"
  @cancel="handleCancel"
  @create="handleCreate">
  <a-form  :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
      <a-form-item label="id">
        <a-select
        v-decorator="[
          'id',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
        ]"
        placeholder="在下面选一个选项"
        @change="handleSelectChange"
      >
        <a-select-option value="0">
          0
        </a-select-option>
      </a-select> 
        </a-form-item> 

      <a-form-item label="type">
      <a-input
       placeholder="请输入模型类型"  v-decorator="['type', { rules: [{ required: true, message: 'Please input your type!' }] }]"
      />
    </a-form-item>
    
     <a-form-item label="productId">
      <a-input
       placeholder="请输入产品id"  v-decorator="['productId', { rules: [{ required: true, message: 'Please input your productId!' }] }]"
      />
    </a-form-item>

    <a-form-item label="subscribeTopic">
      <a-input
       placeholder="请输入话题"  v-decorator="['subscribeTopic', { rules: [{ required: true, message: 'Please input your subscribeTopic!' }] }]"
      />
    </a-form-item>

     <a-form-item label="clientId">
      <a-input
       placeholder="请输入模型类型"  v-decorator="['clientId', { rules: [{ required: true, message: 'Please input your clientId!' }] }]"
      />
    </a-form-item>

    <a-form-item label="allow">
      <a-input
       placeholder="请输入执行信息"  v-decorator="['allow', { rules: [{ required: true, message: 'Please input your allow!' }] }]"
      />
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        确认
      </a-button>
    </a-form-item>
  </a-form>

 </a-modal>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      mypath:"",
      visible:false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    showModal(){
       this.visible=!this.visible
    },
    // 取消填写表单
    handleCancel(){
       this.visible=false
    },
  //  确认表单
    handleCreate(){
      this.visible=false
  },
    handleSubmit(e) {
      let this_1= this
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          //let a = eval(values.status.toLowerCase())
         // console.log(typeof(a))
         // console.log('Received values of form: ', values);
          this_1.mypath=window.g.new_model
          axios({
             url: this_1.mypath,
             method:'post',
                 //发送格式为json
              headers:{
                Authorization:localStorage.getItem('Authorization')
      },   
              data:{
                  "type": values.type,
                  "clientId": values.clientId,
                  "subscribeTopic": values.subscribeTopic,
                   "id":parseInt(values.id),
                   "productId":parseInt(values.productId),
                   "allow":parseInt(values.allow),
                    
              }
          }).then(response=>{
           this_1.visible=false
            console.log(response.data.code)
            if(response.data.errorCode==200){
               this_1.$message.success('创建成功');
            }else{
                this_1.$message.error('创建模型失败');
            }
          })
        }
       });
    },
    handleSelectChange(value) {
    //  console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
  },
};
</script>