<template>
    <div>

     <a-divider />
     <a-modal
      :visible="visible"
      title='修改规则'
      okText='确认'
      @cancel="cancel"
      @ok="create"
    >
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
       <!-- <a-form-item label="behaviour">
      <a-input
        placeholder="请输入你要定义的行为" v-decorator="['behaviour', { rules: [{ required: true, message: 'Please input your behaviour!' }] }]"
      />
    </a-form-item> -->
     
    
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
        Submit
      </a-button>
    </a-form-item>
      </a-form>
    </a-modal>
    </div>
</template>
<script>
import axios from 'axios'
export default {
   props:['myvisible2','item2'],
    name:'ReviseRules',
    data(){
        return{
          mypath:"",
           visible:false,
             form: this.$form.createForm(this, { name: 'coordinated' }),
        }
    },
      watch:{
    myvisible2(n,o){
      this.visible=n
    },

  },
    methods:{
        showModal() {
      this.visible = true;
    },
      create(){
  
       this.visible=false
    },
    cancel(){
      this.visible=false
    },
    handleSubmit(e){
        let this_1 = this
        console.log("修改规则欣慰",this_1.item2.behaviour)
        e.preventDefault();
        this.form.validateFields((err, values) => {
        if (!err) {
        //  console.log('Received values of form: ', values);
          this_1.mypath=window.g.rules_revise
            axios({
             url: this_1.mypath,
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
           // console.log(response.data.code)
            if(response.data.code==200){
               this_1.$message.success('修改成功');
            } else if(response.data.code==201){
                 this_1.$message.warning("code=201 Created")
            }else if(response.data.code==401){
                  this_1.$message.warning("code=401 Unauthorized")
            }
            else if(response.data.code==403){
                 this_1.$message.warning("Code=403 Forbidden")
            }  else if(response.data.code==404){
                 this_1.$message.warning("code=404 NotFount")
            }else if(result.data.message===44||result.data.message===40){
               this_1.$message.error("权限认证失效，请重新登录")
                this_1.$router.push('/Login');
          }
          })
        }

      });
    }
    }
}
</script>