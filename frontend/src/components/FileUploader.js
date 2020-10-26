import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import { Row, Col, Card, UncontrolledAlert } from 'reactstrap';
import Dropzone from 'react-dropzone';

const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }) => {
    return (
      <div>
        {previews}
  
        <div {...dropzoneProps}>
          {files.length < maxFiles && input}
        </div>
  
        {files.length > 0 && submitButton}
      </div>
    )
  }
class FileUploader extends Component {
    static defaultProps = {
        showPreview: true,
    };

    constructor(props) {
        super(props);
        this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);

        this.state = {
            selectedFiles: [],
            status: false,
            error: null
        };
    }

    /**
     * Handled the accepted files and shows the preview
     */
    handleAcceptedFiles = (files) => {
        var allFiles = files;
        console.log(allFiles);

        if(files.length>1){
           this.setState({status: true});
           this.setState({error: "Please select only one file"});
                        return;
        }
        console.log()
        let filename = files[0].path;
        console.log(filename);
        let arr = filename.split(".");
        console.log(arr[arr.length-1]);
        if(arr[arr.length-1]!=="jpg"&&arr[arr.length-1]!=="jpeg"&&arr[arr.length-1]!=="JPG"&&arr[arr.length-1]!=="JPEG"&&arr[arr.length-1]!=="png"&&arr[arr.length-1]!=="PNG"){
            this.setState({status: true});
            this.setState({error: "Please select an image file (jpg/jpeg/png)"});
                         return;
        }
        if (this.props.showPreview) {
            files.map(file =>
                Object.assign(file, {
                    preview: file['type'].split('/')[0] === 'image' ? URL.createObjectURL(file) : null,
                    formattedSize: this.formatBytes(file.size),
                })
            );

            allFiles = this.state.selectedFiles;
            allFiles.push(...files);
            this.setState({ selectedFiles: allFiles });
        }

        if (this.props.onFileUpload) this.props.onFileUpload(allFiles);
    };

    onDismiss = () => {
        this.setState({status: false});
        this.setState({error: null});
    }
    /**
     * Formats the size
     */
    formatBytes = (bytes, decimals) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };

    render() {
        return (
            <React.Fragment>
                <Dropzone 
                onDrop={acceptedFiles => this.handleAcceptedFiles(acceptedFiles)}
                maxFiles={1}
                LayoutComponent={Layout}
                accept="image/*"
                //classNames={{ inputLabelWithFiles: defaultClassNames.inputLabel }}
                inputContent="Drop Files (Custom Layout)"
                //inputContent={(files, extra) => (extra.reject ? 'Image files only' : 'Drag Files')}
                {...this.props}>
                    {({ getRootProps, getInputProps }) => (
                        <div className="dropzone text-center">
                            <div className="dz-message py-5 needsclick" {...getRootProps()}>
                                <input {...getInputProps()} />
                                <i className="h1 text-muted uil-cloud-upload"></i>
                                <h3>Drop files here or click to upload.</h3>
                                {/* <span className="text-muted font-13">
                                    (This is just a demo dropzone. Selected files are <strong>not</strong> actually
                                    uploaded.)
                                </span> */}
                            </div>
                        </div>
                    )}
                </Dropzone>
                {this.state.status && (
                    <UncontrolledAlert color={"danger"} toggle={this.onDismiss}>
                    <strong>{this.state.error}</strong>
                     </UncontrolledAlert>
                )}
                {this.props.showPreview && (
                    <div className="dropzone-previews mt-3" id="file-previews">
                        {this.state.selectedFiles.map((f, i) => {
                            return (
                                <Card
                                    className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                    key={i + '-file'}>
                                    <div className="p-2">
                                        <Row className="align-items-center">
                                            {f.preview && (
                                                <Col className="col-auto">
                                                    <img
                                                        data-dz-thumbnail=""
                                                        className="avatar-sm rounded bg-light"
                                                        alt={f.name}
                                                        src={f.preview}
                                                    />
                                                </Col>
                                            )}
                                            {!f.preview && (
                                                <Col className="col-auto">
                                                    <div className="avatar-sm">
                                                        <span className="avatar-title bg-primary rounded">
                                                            {f.type.split('/')[0]}
                                                        </span>
                                                    </div>
                                                </Col>
                                            )}
                                            <Col className="pl-0">
                                                <Link to="#" className="text-muted font-weight-bold">
                                                    {f.name}
                                                </Link>
                                                <p className="mb-0">
                                                    <strong>{f.formattedSize}</strong>
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default FileUploader;
