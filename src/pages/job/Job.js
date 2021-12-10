import style from "./style.module.scss";
import {
  CheckOutlined,
  InboxOutlined,
} from "../../../node_modules/@ant-design/icons";
import { Button, Input, Form, message, Upload, Radio } from "antd";
import jobOffers from "./job.config";

const Job = () => {
  const { Dragger } = Upload;

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  const mapJob = (arr) => {
    return arr.map((el, index) => {
      return el.photoCheckSide === "right" ? (
        <div key={index} className={style.photoJob}>
          <div className={style.textAbout}>
            <h1>{el.jobName}</h1>
            <p> {el.jobDiscr}</p>
            <Button size="large" type="primary">
              Подробнее
            </Button>
          </div>
          <img src={el.photoJob} alt="not found"></img>
        </div>
      ) : (
        <div key={index} className={style.photoJob}>
          <img src={el.photoJob} alt="not found"></img>
          <div className={style.rightTextAbout}>
            <h1>{el.jobName}</h1>
            <p>{el.jobDiscr}</p>
            <Button size="large" type="primary">
              Подробнее
            </Button>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className={style.headBlock}>
        <div className={style.aboutHead}>Вакансии</div>
      </div>
      <div className={style.jobHead}>
        <h1 className={style.jobInfo}>Стань частью команды.</h1>
        <div className={style.info}>
          <img
            src="https://cdn0.it4profit.com/files/7/vac-p-1-new.png"
            alt="not found"
          ></img>
          <div className={style.infoBlock}>
            <h1>Вместе с нами ты сможешь:</h1>
            <p>
              <CheckOutlined className={style.checkMark} />
              Получить крутой челлендж и прокачать свои навыки в продажах;
            </p>
            <p>
              <CheckOutlined className={style.checkMark} />
              Общаться с интересными людьми, в том числе из разных городов и
              стран;
            </p>
            <p>
              <CheckOutlined className={style.checkMark} />
              Стать частью легендарного бренда;
            </p>
            <p>
              <CheckOutlined className={style.checkMark} />
              Узнать абсолютно все о любимой технике;
            </p>
            <p>
              <CheckOutlined className={style.checkMark} />
              Воплотить в жизнь множество творческих проектов и собственных
              идей.
            </p>
          </div>
        </div>
      </div>
      <div className={style.jobBlock}>{mapJob(jobOffers)}</div>
      <div className={style.formWorker}>
        <h1>Хочу стать частью команды!</h1>
        <Form
          onFinish={(data) => {
            console.log(data.confirmButton);
          }}
        >
          <div className={style.inputs}>
            <Form.Item name="userName">
              <Input className={style.fieldForm} placeholder="Ваше имя" />
            </Form.Item>
            <Form.Item name="phoneNumber">
              <Input className={style.fieldForm} placeholder="+375222222222" />
            </Form.Item>
            <Form.Item name="mail">
              <Input className={style.fieldForm} placeholder="Email" />
            </Form.Item>
            <Form.Item name="comment">
              <Input
                className={style.commentBar}
                placeholder="Введите номер виртуальной карты или комментарий к заказу"
              />
            </Form.Item>
            <div className={style.fileManager}>
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Перетащите или выберите файл</p>
              </Dragger>
              <Form.Item name="confirmButton">
                <Radio value={true} className={style.confirmButton}>
                  <span>
                    Я согласен на обработку персональных данных в соответствии с
                  </span>
                  <a href="$"> политикой</a>
                </Radio>
              </Form.Item>
            </div>
          </div>

          <Button htmlType="submit" size="large" type="primary">
            Отправить
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Job;
