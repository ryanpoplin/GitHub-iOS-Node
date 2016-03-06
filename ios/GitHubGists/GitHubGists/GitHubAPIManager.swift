//
//  GitHubAPIManager.swift
//  GitHubGists
//
//  Created by Ryan Poplin on 3/3/16.
//  Copyright © 2016 Luupy. All rights reserved.
//

import Foundation
import Alamofire
import SwiftyJSON

class GitHubAPIManager {
    // with the anticipation of a single instance of GitHubAPIManager: Singleton Pattern (be aware of the state of a non-dying object)
    static let sharedInstance = GitHubAPIManager()
    
    func printPublicGists() -> Void {
        Alamofire.request(GistRouter.GetPublic()).responseString { response in
            if let receivedString = response.result.value {
                print(receivedString)
            }
        }
    }
}