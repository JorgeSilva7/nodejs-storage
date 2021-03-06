// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// sample-metadata:
//   title: List Files with Old Versions.
//   description: List Files with Old Versions.
//   usage: node listFilesWithOldVersions.js <BUCKET_NAME>

function main(bucketName = 'my-bucket') {
  // [START storage_list_file_archived_generations]
  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function listFilesWithOldVersions() {
    const [files] = await storage.bucket(bucketName).getFiles({
      versions: true,
    });

    console.log('Files:');
    files.forEach(file => {
      console.log(file.name, file.generation);
    });
  }

  listFilesWithOldVersions().catch(console.error);
  // [END storage_list_file_archived_generations]
}
main(...process.argv.slice(2));
