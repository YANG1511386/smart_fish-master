<template>
  <div>
    <a-button type="primary" @click="showModal">
      新建产品行为
    </a-button>
    <a-modal
 :visible="visible"
 title="创建产品行为"
  @cancel="handleCancel"
  @create="handleCreate">
  <a-form  :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
    <!--<a-form-item label="ID">
      <a-input
       placeholder="请输入产品ID" v-decorator="['id', { rules: [{ required: true, message: 'Please input yourhardWareID!' }] }]"
      />
    </a-form-item>-->
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

      <a-form-item label="topic">
      <a-input
       placeholder="请输入话题"  v-decorator="['topic', { rules: [{ required: true, message: 'Please input your topic!' }] }]"
      />
    </a-form-item>
    
    <a-form-item label="message">
      <a-input
       placeholder="请输入指令信息"  v-decorator="['message', { rules: [{ required: true, message: 'Please input your message!' }] }]"
      />
    </a-form-item>

    <a-form-item label="behavior">
      <a-input
       placeholder="请输入指令行为"  v-decorator="['behavior', { rules: [{ required: true, message: 'Please input your behavior!' }] }]"
      />
    </a-form-item>

    <a-form-item label="modelId">
      <a-input
       placeholder="请输入模型id"  v-decorator="['modelId', { rules: [{ required: true, message: 'Please input your modelId!' }] }]"
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
          
          // let a = eval(values.status.toLowerCase())
         // console.log(typeof(a))
          //console.log('Received values of form: ', values);
          this_1.mypath=window.g.new_rules
          
          axios({
             
             url: window.g.new_rules,
             method:'post',
                 //发送格式为json
              headers:{
                Authorization:localStorage.getItem('Authorization')
      },   
              data:{
                  "topic": values.topic,
                  "message": values.message,
                  "behavior": values.behavior,
                  "message": values.message,
                  "id":parseInt(values.id),
                  "modelId":parseInt(values.modelId),                    
              }
          }).then(response=>{
           this_1.visible=false
          //  console.log(response.data.code)
            if(response.data.errorCode==200){
               this_1.$message.success('创建成功');
            }else{
                this_1.$message.error('创建失败');
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